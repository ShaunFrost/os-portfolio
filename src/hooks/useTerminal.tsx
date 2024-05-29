import { useOSContext } from "./useOSContext";
import { useState, KeyboardEvent, useRef, useEffect } from "react";
import WelcomeInput from "../components/applications/WelcomeInput";
import { Help, WhoAmI, WhoAreYou, Invalid, Projects, About } from "../components/commands";
import { APPS } from "@constants";

enum COMMANDS {
    HELP = 'help',
    WHOAMI = 'whoami',
    WHOAREYOU = 'whoareyou',
    PROJECTS = 'projects',
    CLEAR = 'clear',
    ABOUT = 'about'
}

const getCommandOutput = (command: string) => {
    switch (command) {
        case COMMANDS.HELP:
            return <Help />
        case COMMANDS.WHOAMI:
            return <WhoAmI />
        case COMMANDS.WHOAREYOU:
            return <WhoAreYou />
        case COMMANDS.PROJECTS:
            return <Projects />
        case COMMANDS.ABOUT:
            return <About />
        default:
            return <Invalid command={command} />
    }
}

export const useTerminal = () => {
    const { terminalInput, setTerminalInput, addToDesktopApps } = useOSContext()
    const [terminalData, setTerminalData] = useState([WelcomeInput])
    const [terminalOutput, setTerminalOutput] = useState('')
    const [commandHistory, setCommandHistory] = useState<string[]>([])
    const [historyIndex, setHistoryIndex] = useState(0)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const currentCommandHistoryLength = commandHistory.length
            if (terminalInput.trim() !== '') {
                setCommandHistory(prev => [ ...prev, terminalInput.trim() ])
                setHistoryIndex(currentCommandHistoryLength + 1)
            }
            if (terminalInput.trim() === COMMANDS.CLEAR) {
                setTerminalData([])
            } else {
                const commandOutput = getCommandOutput(terminalInput.trim())
                setTerminalData(prev => [...prev, commandOutput])
            }
            if (terminalInput.trim() === COMMANDS.ABOUT) {
                setTimeout(() => {
                    addToDesktopApps(APPS.ABOUT)
                }, 2000)
            } else if (terminalInput.trim() === COMMANDS.PROJECTS) {
                setTimeout(() => {
                    addToDesktopApps(APPS.PROJECTS)
                }, 2000)
            }
            setTerminalInput("")   
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (historyIndex === 0) return
            const prevCommandIndex = historyIndex - 1;
            setTerminalInput(commandHistory[prevCommandIndex])
            setHistoryIndex(prev => prev - 1)
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (historyIndex === commandHistory.length) return
            const nextCommandIndex = historyIndex + 1;
            if (nextCommandIndex === commandHistory.length) {
                setTerminalInput('')
            } else {
                setTerminalInput(commandHistory[nextCommandIndex])
            }
            setHistoryIndex(prev => prev + 1)
        }
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    useEffect(() => {
        inputRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [terminalData])

    return {
        terminalInput,
        setTerminalInput,
        terminalOutput,
        setTerminalOutput,
        handleKeyDown,
        terminalData,
        setTerminalData,
        inputRef
    }
}