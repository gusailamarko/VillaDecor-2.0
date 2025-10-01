import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setMetaTag = (name:string, content:string, iconSrc:string) => {
  let titleTag = document.querySelector("title");
  if (!titleTag) {
    titleTag = document.createElement("title");
    document.head.appendChild(titleTag);
  }
  titleTag.textContent = name;

  let iconLink = document.querySelector('link[rel="icon"]');
  if(!iconLink)
  {
    iconLink = document.createElement("link");
    iconLink.setAttribute("href", iconSrc);
    iconLink.setAttribute("rel", "icon");
    document.head.appendChild(iconLink);
  }

  const setOrUpdate = (selector: string, attr: string, value: string) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, value);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  setOrUpdate('meta[name="description"]', "name", "description");
  setOrUpdate('meta[property="og:title"]', "property", "og:title");
  setOrUpdate('meta[property="og:description"]', "property", "og:description");
}