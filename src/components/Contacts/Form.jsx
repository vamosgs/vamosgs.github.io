import React from 'react';

const Form = ({ onSubmit, onChange, data }) => (
  <form onSubmit={onSubmit}>
    {data.name.error && <p className="err">{data.name.error}</p>}
    <input value={data.name.value} onChange={onChange('name')} type="text" placeholder="Name" />
    {data.mail.error && <p className="err">{data.mail.error}</p>}
    <input value={data.mail.value} onChange={onChange('mail')} type="text" placeholder="Email" />
    {data.message.error && <p className="err">{data.message.error}</p>}
    <textarea
      value={data.message.value}
      onChange={onChange('message')}
      validate="false"
      name="message"
      placeholder="Message..․"
      cols="30"
      rows="10"
    />
    <button>Send</button>
  </form>
);

export default Form;
