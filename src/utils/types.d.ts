import { Document } from '@contentful/rich-text-types';
import React from 'react';
import { RenderOptions } from '@testing-library/react';

type UI = JSX.Element;
type Options =
	| Pick<
			//eslint-disable-next-line
			RenderOptions<typeof import('@testing-library/dom/types/queries')>,
			`container` | `baseElement` | `hydrate` | `wrapper`
	  >
	| undefined;

interface ChildrenProps {
	children: React.ReactNode;
}

interface ClassNameProps {
	className: string;
}

interface ButtonProps {
	variant: `primary` | `secondary`;
	text: string;
	to?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: string;
	additionalClass?: string;
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
}

type Key = string | number | symbol;

export {
	ChildrenProps,
	ButtonProps,
	ProjectsContainerProps,
	ProjectOptions,
	ProjectProps,
	ClassNameProps,
	Data,
	DataResponse,
	MobileProjectProps,
	UI,
	Options,
	Key,
};