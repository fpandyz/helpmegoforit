import Image from 'next/image';
import clsx from 'clsx';

export function Card({
  title,
  link,
  linkText,
  description,
  icon,
}:{
  title?: string;
  link?: string;
  linkText?: string;
  description: string;
  icon?: string;
}) {
  return (
    <div key={description} className="card">

      {title && (
        <div className="card__title text-type-3">
          {title}
          {link && linkText && (
            <a className="link" href={link} target="_blank">{linkText}</a>
          )}
        </div>
      )}

      <span className={clsx('card__description', {
        'card__description--icon text-type-3': icon,
        'text-type-3': description && !title,
        'card__description--title text-type-2': title,
      })}
      >
        {description}
      </span>

      {icon && (
        <span className="card__icon">
          <Image
            src={icon}
            alt="cardIcon"
            fill
          />
        </span>
      )}
    </div>
  );
}
