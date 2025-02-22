import React from "react";

export function startLoadingBtn(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
  const btn = event.currentTarget;
  btn.classList.add('loading-btn');
}

export function stopLoadingBtn(event: React.MouseEvent<HTMLButtonElement>) {
  const btn = event.target as HTMLElement;
  btn.classList.remove('loading-btn');
}