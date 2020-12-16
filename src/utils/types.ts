import {Document} from '@contentful/rich-text-types';
import {React} from 'src/deps';

interface ChildrenProps {
    children: React.ReactNode;
}

interface ClassNameProps {
    className: string;
}

interface ButtonProps {
    text: string;
    className: string;
    to?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: string;
}

interface ProjectsContainerProps {
    data: {
        allContentfulProject: {
            edges: [
                {
                    node: {
                        node_locale: string;
                        title: string;
                        subtitle: string;
                        body: {
                            raw: string;
                        };
                        projectGif: {
                            file: {
                                url: string;
                            }
                        };
                        liveSiteUrl: string;
                        gitRepositoryUrl: string;
                    }
                }
            ]
        }
    };
    options: object;
}

interface ProjectProps {
    index: number;
    title: string;
    body: Document;
    projectGif: string;
    liveSiteUrl: string;
    gitRepositoryUrl: string;
    options: object;
}

type Breakpoint = 'xs' | 'sm' | 'ms' | 'md' | 'mlg' | 'lg' | 'xl'

type Direction = 'up' | 'down'

export {
    ChildrenProps,
    ButtonProps,
    ProjectsContainerProps,
    ProjectProps,
    ClassNameProps,
    Breakpoint,
    Direction,
};
