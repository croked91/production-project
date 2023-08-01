import React from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    i18nKey: string;
    authOnly?: boolean;
}
