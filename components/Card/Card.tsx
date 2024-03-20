import Image from 'next/image';
import clsx from 'clsx';

export function Card({
  description,
  icon,
  className = '',
}:{
  description: string;
  icon?: string;
  className?: string;
}) {
  return (
    <div key={description} className={`card ${className}`}>
      <span className={clsx('card__description text-type-3', {
        'card__description--icon': icon,
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
