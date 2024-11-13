import React from 'react';

const SortingTemplate = ({ title, imageSrc, code, description }) => {
  const formatCodeWithLineNumbers = (code) => {
    return code
      .split('\n')
      .map((line, index) => `${index + 1}    ${line}`)
      .join('\n');
  };
  const desc = (description) => {
    return description
      .split('\n')
      .map((line, index) => `${index + 1}    ${line}`)
      .join('\n');
  };

  return (
    <div className="sorting-page">
      <h2>{title}</h2>
      <div className="block-diagram">
        <img src={imageSrc} alt={`${title} diagram`} />
      </div>
      <div className="code-container">
        <h3>Przykładowy kod:</h3>
        <pre>
          <code>{formatCodeWithLineNumbers(code)}</code>
        </pre>
      </div>
      <div className="theory-description">
        <h3>Opis:</h3>
        <pre>
        <p>{description}</p>
        </pre>
      </div>
    </div>
  );
};

export default SortingTemplate;
