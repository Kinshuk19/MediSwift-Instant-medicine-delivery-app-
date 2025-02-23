/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/features/blog` | `/features/blog`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/features/delivery` | `/features/delivery`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/features/doctor` | `/features/doctor`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/features/lab-tests` | `/features/lab-tests`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } } | { pathname: `/categories/[category]`, params: Router.UnknownInputParams & { category: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/features/blog` | `/features/blog`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/features/delivery` | `/features/delivery`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/features/doctor` | `/features/doctor`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/features/lab-tests` | `/features/lab-tests`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } } | { pathname: `/categories/[category]`, params: Router.UnknownOutputParams & { category: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/features/blog${`?${string}` | `#${string}` | ''}` | `/features/blog${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/features/delivery${`?${string}` | `#${string}` | ''}` | `/features/delivery${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/features/doctor${`?${string}` | `#${string}` | ''}` | `/features/doctor${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/features/lab-tests${`?${string}` | `#${string}` | ''}` | `/features/lab-tests${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/features/blog` | `/features/blog`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/features/delivery` | `/features/delivery`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/features/doctor` | `/features/doctor`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/features/lab-tests` | `/features/lab-tests`; params?: Router.UnknownInputParams; } | `/+not-found` | `/categories/${Router.SingleRoutePart<T>}` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } } | { pathname: `/categories/[category]`, params: Router.UnknownInputParams & { category: string | number; } };
    }
  }
}
