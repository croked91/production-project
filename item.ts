import { SVGProps, VFC } from 'react';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ArticleIcon from 'shared/assets/icons/arcticle-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SideBarItemType {
  path: string;
  i18nKey: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SideBarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    i18nKey: 'Main page'
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    i18nKey: 'About website'
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    i18nKey: 'Profile',
    authOnly: true
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    i18nKey: 'Article',
    authOnly: true
  }
];
