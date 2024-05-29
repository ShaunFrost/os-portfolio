import TerminalPrefixSpan from "./TerminalPrefixSpan"
import { useTerminal } from "@hooks/useTerminal"


export const Terminal = () => {
    const { terminalInput, setTerminalInput, handleKeyDown, terminalData, inputRef } = useTerminal()
    return (
        
            <div className="terminal" onClick={() => inputRef.current?.focus()}>
                {
                    terminalData.map((data, index) => {
                        return <div key={index} className="terminal-view">
                            <TerminalPrefixSpan/>
                            {data}
                        </div>
                    })
                }
                <label htmlFor="terminal-input"><TerminalPrefixSpan/></label>
                <input id="terminal-input" type="text" value={terminalInput} ref={inputRef} 
                    onChange={(e) => setTerminalInput(e.target.value)} 
                    onKeyDown={(e) => handleKeyDown(e)}
                    autoComplete="off" spellCheck="false"
                />
            </div>
        
    )
}

export default Terminal