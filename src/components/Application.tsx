import React, { PropsWithChildren, useState, useEffect, useRef } from "react"
import { useOSContext } from "@hooks/useOSContext"
import { APPS } from '@constants'

type ApplicationProps = PropsWithChildren & {
    id: APPS,
    minimize: boolean
}

const Application = ({children, id, minimize}: ApplicationProps) => {

    const { 
        addToDesktopApps, closeApplication, minimizeApplication, 
        maximizeApplication, resetApplicationToNormal, appRefs 
    } = useOSContext()
    const [draggable, setDraggable] = useState(false)
    const [isMaximized, setIsMaximized] = useState(false)
    const [pos, setPos] = useState({ x: 0, y: 0})
    const draggableRef = useRef<HTMLDivElement | null>(null)

    const handleMinimize = (e: React.MouseEvent) => {
        minimizeApplication(id)
        setIsMaximized(false)
        e.stopPropagation();
    }

    const handleMaximize = (e: React.MouseEvent) => {
        e.stopPropagation();
        const shouldMaximize = !isMaximized
        setIsMaximized(shouldMaximize)
        if (shouldMaximize) {
            maximizeApplication(id)
        } else {
            resetApplicationToNormal(id)
        }
    }

    const handleClose = (e: React.MouseEvent) => {
        closeApplication(id)
        e.stopPropagation();
    }

    const handleApplicationClick = () => {
        if (isMaximized) return
        addToDesktopApps(id)
    }

    useEffect(() => {
        
        const handleWindowMouseMove = (event: MouseEvent) => {
            if (draggable) {
                const applicationRef = appRefs.current.get(id)
                if (applicationRef) {
                    const { clientX, clientY } = event
                    if (clientX - pos.x > 0 && clientX - pos.x < (window.innerWidth - 200)) {
                        applicationRef.style.left = `${clientX - pos.x}px`
                    }
                    if (clientY - pos.y > 20 && clientY - pos.y < (window.innerHeight - 200)) {
                        applicationRef.style.top = `${clientY - pos.y}px`
                    }
                }
            }
        }

        const handleMouseDown = (event: MouseEvent) => {
            if (isMaximized) return
            if (event.target === draggableRef.current) {
                setDraggable(true)
                const applicationRef = appRefs.current.get(id);
                if (applicationRef) {
                    const { x, y } = applicationRef.getBoundingClientRect();
                    const { clientX, clientY } = event;
                    setPos({ x: clientX - x, y: clientY - y });
                }
            }
        }

        const handleMouseUp = () => {
            setDraggable(false)
        }

        window.addEventListener('mousemove', handleWindowMouseMove)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)

        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
        }
    })

    return (
        <div className={minimize ? 'application minimize' : 'application'} ref={element => appRefs.current.set(id, element)} onClick={handleApplicationClick}>
            <div className="application-header">
                <div className="traffic-lights">
                    <button className="red" onClick={handleClose}><span>&#x2715;</span></button>
                    <button className="yellow" onClick={handleMinimize}><span>&minus;</span></button>
                    <button className="green" onClick={handleMaximize}><span>&#10529;</span></button>
                </div>
                <div className="draggable-div" ref={draggableRef}></div>
            </div>
            <div className="application-body">
                {children}
            </div>
        </div>
    )
}

export default Application