"use client";

import React from "react";
import Link from "next/link";

export default function TrackedLink({ href, children, className, target, rel, isExternal = false }) {
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
