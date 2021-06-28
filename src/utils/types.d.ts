import { Document } from '@contentful/rich-text-types';
import { Button } from '@material-ui/core';
import { RenderOptions } from '@testing-library/react';
import React, { SetStateAction } from 'react';

type UI = JSX.Element;
type Options =
	| Pick<//eslint-disable-next-line
	RenderOptions<typeof import('@testing-library/dom/types/queries')>,
	`container` | `baseElement` | `hydrate` | `wrapper`>
	| undefined;

interface ChildrenProps {
	children: React.ReactNode;
}

interface ButtonProps extends Button {
	type?: `button` | `submit` | `reset` | undefined;
	variant: `primary` | `secondary`;
	text: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
	variant: `primary` | `secondary`;
	text: string;
	to?: string;
}

type Data = {
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
					};
				};
				liveSiteUrl: string;
				gitRepositoryUrl: string;
			};
		},
	];
};

type DataResponse = {
	allProjects: {
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
						};
					};
					liveSiteUrl: string;
					gitRepositoryUrl: string;
				};
			},
		];
	};
};

type ProjectOptions = Record<never, never>;

interface ProjectsContainerProps {
	allProjects: Data;
	options: ProjectOptions;
}

interface ProjectProps {
	title: string;
	body: Document;
	projectGif: string;
	liveSiteUrl: string;
	gitRepositoryUrl: string;
	options: ProjectOptions;
}

interface MobileProjectProps extends ProjectProps {
	index: number;
	projectsAmount: number;
}

type Key = string | number | symbol;

type SetState<T> = React.Dispatch<SetStateAction<T>>;

export {
	ChildrenProps,
	ButtonProps,
	ProjectsContainerProps,
	ProjectOptions,
	ProjectProps,
	Data,
	DataResponse,
	MobileProjectProps,
	UI,
	Options,
	Key,
	SetState,
	LinkProps,
};
