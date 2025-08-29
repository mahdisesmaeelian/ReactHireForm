import { useState } from 'react';

export default function FileUploader() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const allowedTypes = ['application/pdf', 'image/jpeg'];
    if (!allowedTypes.includes(selectedFile.type)) {
      setError('فایل باید PDF یا JPG باشد.');
      setFile(null);
      return;
    }

    const maxSize = 1 * 1024 * 1024;
    if (selectedFile.size > maxSize) {
      setError('حجم فایل نباید بیشتر از 1 مگابایت باشد.');
      setFile(null);
      return;
    }
    setError('');
    setFile(selectedFile);
  };

  return (
    <div className="col control">
      <label htmlFor="uploadedFile" className="form-label">
        آپلود فایل رزومه
      </label>
      <input
        id="uploadedFile"
        type="file"
        className="form-control"
        onChange={handleFileChange}
        accept=".pdf,.jpeg,.jpg"
        name="uploadedFile"
      />
      {file && <p className="text-success mt-2">{file.name} انتخاب شد</p>}
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
}
