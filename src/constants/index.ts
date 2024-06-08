import ar_img from '@assets/projects/ar-viewer-sample.webp'
import neptune_img from '@assets/projects/neptune-sample.webp'
import wordle_img from '@assets/projects/multiwordle-sample.webp'
import cps_img from '@assets/projects/create-ps-sample.webp'
import os_img from '@assets/projects/os-portfolio-sample.webp'
import neko_img from '@assets/projects/neko-chan-sample.webp'

export enum THEME {
    LIGHT = "light",
    DARK = "dark"
}

export enum APPS {
    TERMINAL = "terminal",
    PROJECTS = "projects",
    RESUME = "resume",
    ABOUT = "about",
    NONE = "none"
}

export enum DATE_SECTION {
    DAY,
    MONTH
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

export const getValue = (index: number, type: DATE_SECTION) => {
    switch (type) {
        case DATE_SECTION.MONTH:
            return MONTHS[index]
        case DATE_SECTION.DAY:
            return DAYS[index]
    }
}

export type ProjectType = {
    name: string
    desc: string
    gitlink: string
    pic: string
    websiteLink?: string
    keywords: string[]
}

export const PROJECTS: ProjectType[] = [
    {
        name: "AR Viewer",
        desc: 'An AR viewer that displays artificial objects overlaid on images of a real 3D scene using point cloud generated by COLMAP.',
        gitlink: "https://github.com/ShaunFrost/ar_viewer",
        pic: ar_img,
        keywords: ["MATLAB", "Computer Vision", "AR"]
    },
    {
        name: "Neptune",
        desc: 'An offline desktop application to manage your side projects. Built with Electron JS for MacOS and Windows. Functionality to take markdown notes and draw application plans via canvas.',
        gitlink: "https://github.com/ShaunFrost/neptune",
        pic: neptune_img,
        websiteLink: "https://github.com/ShaunFrost/neptune/releases",
        keywords: ["Electron", "React", "TypeScript","Tailwind"]
    },
    {
        name: "MultiPlayer Wordle",
        desc: 'Multiplayer version of Wordle. Chat while challenging your friends to a game of wordle!',
        gitlink: "https://github.com/ShaunFrost/multiplayer-wordle",
        pic: wordle_img,
        websiteLink: "https://multiplayer-wordle-game.onrender.com/",
        keywords: ["React", "Socket", "Node", "Express"]
    },
    {
        name: "Neko Chan UI",
        desc: 'A library of reusable components for React/Typescript projects.',
        gitlink: "https://github.com/ShaunFrost/neko-chan-ui",
        pic: neko_img,
        websiteLink: "https://www.npmjs.com/package/neko-chan-ui",
        keywords: ["React", "Typescript", "Node"]
    },
    {
        name: "Portfolio-OS",
        desc: 'MacOS style operating system portfolio to showcase my projects, skills and experience. You are viewing this right now.',
        gitlink: "https://github.com/ShaunFrost/os-portfolio",
        pic: os_img,
        keywords: ["React", "TypeScript", "FramerMotion"]
    },
    {
        name: "Project Skeleton",
        desc: 'Scaffolding empty hello world create vite react/typescript projects. No more scaffolding and deleting extra files.',
        gitlink: "https://github.com/ShaunFrost/create-project-skeleton",
        pic: cps_img,
        websiteLink: "https://www.npmjs.com/package/create-project-skeleton",
        keywords: ["Node"]
    }
]

export const headerVariants = {
    hidden: {
        y: -50,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.25
        }
    }
}

export const contactVariants = {
    hidden: {
        x: -100,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            delay: 0.2,
            duration: 1,
            ease: "easeOut"
        }
    }
}

export const tagCloudVariants = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}