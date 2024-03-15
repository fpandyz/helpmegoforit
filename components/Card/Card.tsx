import Image from 'next/image';

export function Card({
  description,
  icon,
}:{
  description: string;
  icon?: string;
}) {
  return (
    <div key={description} className="card">
      <span className="card__description text-type-3">
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
