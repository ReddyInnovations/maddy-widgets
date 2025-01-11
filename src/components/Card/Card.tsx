import { cardInfo } from '@src/interfaces/card';

const Card: React.FC<cardInfo & { borderColor?: string }> = ({
  title,
  subTitle,
  details,
  duration,
  linkTitle,
  url,
  borderColor,
}) => {
  return (
    <div
      className="card"
      style={{
        border: `1px solid ${borderColor || '#003366'}`,
        borderLeft: `5px solid ${borderColor || '#003366'}`,
      }}
    >
      <h3 className="card-title">{title}</h3>
      {subTitle && <h4 className="card-subtitle">{subTitle}</h4>}
      <ul className="card-details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <p className="card-duration">{duration}</p>
      {url && (
        <a
          href={url}
          className="card-link"
          style={{ color: `${borderColor || '#003366'}` }}
        >
          {`${linkTitle || 'View'}`}
        </a>
      )}
    </div>
  );
};

export default Card;
