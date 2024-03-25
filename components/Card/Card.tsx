import Image from 'next/image';
import clsx from 'clsx';

export function Card({
  title,
  link,
  linkText,
  description,
  icon,
  className = '',
}:{
  title?: string;
  link?: string;
  linkText?: string;
  description: any;
  icon?: string;
  className?: string;
}) {
  return (
    <div key={description} className={`card ${className}`}>

      {title && (
        <div className="text-type-3 card__title ">
          {title}
          {link && linkText && (
            <a className="link" href={link} target="_blank">{linkText}</a>
          )}
        </div>
      )}

      <span className={clsx('card__description', {
        'text-type-3 card__description--icon': icon,
        'text-type-3': description && !title,
        'text-type-2 card__description--title': title,
      })}
      >
        {description}
      </span>

      {icon && (
        <span className="card__icon">
          <Image
            src={icon}
            alt="Иллюстрация карточки"
            fill
          />
        </span>
      )}
    </div>
  );
}
