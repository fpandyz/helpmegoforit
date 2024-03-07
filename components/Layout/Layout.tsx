import { PropsWithChildren } from 'react';

export default function Layout({
  children,
  mainClassName,
}: {
  mainClassName?: string;
} & PropsWithChildren) {
  return (
    <div className="layout">
      <main className={mainClassName}>
        {children}
      </main>
    </div>
  );
}
