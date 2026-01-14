# Typography & Heading Hierarchy

This document defines the heading and typography hierarchy used across the application to ensure visual consistency, semantic correctness, and long-term scalability.

The goal is to clearly differentiate between page titles, section titles, and label-style headings without visual ambiguity.


## Hierarchy Overview

| Level | Purpose | HTML Tag | Tailwind Style |
|----|----|----|----|
| 1 | Page Title | h1 | text-3xl font-bold |
| 2 | Major Section | h2 | text-2xl font-semibold |
| 3 | Section Label | h3 | text-sm font-semibold uppercase tracking-wider text-subtle-gray |
| 4 | Sub-section Label | h3 or h4 | text-sm font-semibold uppercase tracking-wide text-subtle-gray |
| - | Card Header | h2 | text-xl font-semibold |
| - | Content | p, span, li | text-base text-dark-gray |
| - | Links | Link| text-secondary hover:text-contrast|