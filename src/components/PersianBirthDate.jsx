import { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

function PersianBirthDate() {
  const [birthDate, setBirthDate] = useState(null);

  return (
    <div className="col control">
      <label htmlFor="birthDate">تاریخ تولد</label>
      <DatePicker
        id="birthDate"
        name="birthDate"
        calendar={persian}
        locale={persian_fa}
        value={birthDate}
        onChange={setBirthDate}
        format="YYYY/MM/DD"
        placeholder="انتخاب کنید"
        inputClass="w-75 me-3"
      />
      {birthDate && (
        <p className="text-dark">تاریخ انتخاب شده: {birthDate.format()}</p>
      )}
    </div>
  );
}

export default PersianBirthDate;
