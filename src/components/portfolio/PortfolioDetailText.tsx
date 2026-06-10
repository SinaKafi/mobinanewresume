'use client';

import { useReducedMotion } from 'framer-motion';
import { m } from '@/lib/motion';
import { Children, isValidElement, ReactElement, ReactNode } from 'react';

interface PortfolioDetailTextProps {
  children: ReactNode;
  className?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedBlock({
  index,
  reducedMotion,
  children,
}: {
  index: number;
  reducedMotion: boolean | null;
  children: ReactNode;
}) {
  if (reducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '-40px 0px' }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.07, 0.35),
        ease,
      }}
    >
      {children}
    </m.div>
  );
}

function getChildNodes(children: ReactNode): ReactNode[] {
  if (isValidElement(children) && children.type === 'div') {
    const props = children.props as {
      children?: ReactNode;
      className?: string;
    };
    if (props.children) {
      return Children.toArray(props.children);
    }
  }

  return Children.toArray(children);
}

function getWrapperClassName(children: ReactNode): string | undefined {
  if (isValidElement(children) && children.type === 'div') {
    return (children.props as { className?: string }).className;
  }

  return undefined;
}

export default function PortfolioDetailText({
  children,
  className,
}: PortfolioDetailTextProps) {
  const reducedMotion = useReducedMotion();
  const nodes = getChildNodes(children);
  const wrapperClassName = className ?? getWrapperClassName(children);

  return (
    <div className={wrapperClassName ?? 'flex flex-col space-y-8'}>
      {nodes.map((node, index) => {
        if (!isValidElement(node)) {
          return (
            <AnimatedBlock
              key={index}
              index={index}
              reducedMotion={reducedMotion}
            >
              {node}
            </AnimatedBlock>
          );
        }

        const key =
          (node as ReactElement).key ??
          `${index}-${typeof node.type === 'string' ? node.type : 'block'}`;

        return (
          <AnimatedBlock key={key} index={index} reducedMotion={reducedMotion}>
            {node}
          </AnimatedBlock>
        );
      })}
    </div>
  );
}
