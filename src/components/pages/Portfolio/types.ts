type Node = { content: { value: any; }[]; };
type HookReturns = () => {
    allContentfulProject: {
        edges: {
            node: {
                node_locale: string,
                title: string,
                body: {
                    raw: string;
                }
            },
            projectGif: {
                file: {
                    url: string;
                }
            },
            liveSiteUrl: string;
            gitRepositoryUrl: string;
        }
    }
}

export {
    Node,
    HookReturns
};
