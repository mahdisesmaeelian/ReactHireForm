import FileUploader from './FileUploader.jsx';
import MapSelector from './Map.jsx';
import PersianBirthDate from './PersianBirthDate.jsx';

export default function SoftTebForm() {
  function handleSubmition(evet) {
    evet.preventDefault();

    const fd = new FormData(event.target);
    const skillsGroup = fd.getAll('skills');
    const data = Object.fromEntries(fd.entries());
    data.skills = skillsGroup;
    console.log(data);
    event.target.reset();
  }

  return (
    <form className="justify-content-center" onSubmit={handleSubmition}>
      <div className="row row-cols-3">
        <div className="col control">
          <label htmlFor="name">نام</label>
          <input id="name" type="text" name="name" placeholder="نام" required />
        </div>

        <div className="col control">
          <label htmlFor="familyName">نام خانوادگی</label>
          <input
            id="familyName"
            type="text"
            name="familyName"
            placeholder="نام خانوادگی"
            required
          />
        </div>

        <div className="col control">
          <label htmlFor="fathersName">نام پدر</label>
          <input
            id="fathersName"
            type="text"
            name="fathersName"
            placeholder="نام پدر"
            required
          />
        </div>

        <div className="col control">
          <label htmlFor="nationalCode">کد ملی</label>
          <input
            id="nationalCode"
            type="text"
            name="nationalCode"
            placeholder="کد ملی"
            required
          />
        </div>

        <PersianBirthDate />

        <div className="col control">
          <label className="form-label">جنسیت</label>
          <div className="d-flex gap-3">
            <div className="">
              <input type="radio" name="gender" id="male" value="آقا" />
              <label className="" htmlFor="male">
                آقا
              </label>
            </div>

            <div className="">
              <input type="radio" name="gender" id="female" value="خانم" />
              <label className="" htmlFor="female">
                خانم
              </label>
            </div>
          </div>
        </div>

        <div className="col control">
          <label htmlFor="email">ایمیل</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="col control">
          <label htmlFor="phoneNum">شماره تماس</label>
          <input
            id="phoneNum"
            type="text"
            name="phoneNum"
            placeholder="09120000000"
            required
          />
        </div>

        <div className="col-12 control">
          <label className="form-label mb-2 ps-3">مهارت‌ها</label>
          <div
            className="p-2 rounded-3"
            style={{
              backgroundColor: '#fff',
            }}
          >
            <div className="row row-cols-3 row-cols-md-4 gx-5">
              <div className="col d-flex align-items-center me-3">
                <input
                  type="checkbox"
                  id="skill-js"
                  autoComplete="off"
                  name="skills"
                  value="JavaScript"
                />
                <label className="me-2" htmlFor="skill-js">
                  JavaScript
                </label>
              </div>

              <div className="col d-flex align-items-center me-3">
                <input
                  type="checkbox"
                  id="skill-ts"
                  autoComplete="off"
                  name="skills"
                  value="TypeScript"
                />
                <label className="me-2" htmlFor="skill-ts">
                  TypeScript
                </label>
              </div>

              <div className="col d-flex align-items-center me-3">
                <input
                  type="checkbox"
                  id="skill-react"
                  autoComplete="off"
                  name="skills"
                  value="react-react"
                />
                <label className="me-2" htmlFor="skill-react">
                  React.js
                </label>
              </div>

              <div className="col d-flex align-items-center me-3">
                <input
                  type="checkbox"
                  id="skill-bootstrap"
                  autoComplete="off"
                  name="skills"
                  value="Bootstrap"
                />
                <label className="me-2" htmlFor="skill-bootstrap">
                  Bootstrap
                </label>
              </div>
              <div className="col d-flex align-items-center me-3">
                <input
                  type="checkbox"
                  id="skill-tailwind"
                  autoComplete="off"
                  name="skills"
                  value="Tailwind"
                />
                <label className="me-2" htmlFor="skill-tailwind">
                  Tailwind.css
                </label>
              </div>

              <div className="col d-flex align-items-center me-3">
                <input
                  type="checkbox"
                  id="skill-nextjs"
                  autoComplete="off"
                  name="skills"
                  value="Nextjs"
                />
                <label className="me-2" htmlFor="skill-nextjs">
                  Next.js
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 control">
          <label htmlFor="exprience">سابقه کار</label>
          <select id="exprience" name="exprience" required>
            <option value="">انتخاب کنید</option>
            <option value="1-3 سال">1-3 سال</option>
            <option value="3-5 سال">3-5 سال</option>
            <option value="5 سال به بالا">5 سال به بالا</option>
          </select>
        </div>

        <FileUploader />

        <div className="col-12 control">
          <label htmlFor="address">آدرس</label>
          <textarea
            id="address"
            name="address"
            placeholder="آدرس خود را اینجا وارد کنید..."
            className="border rounded px-2 w-100"
          />
        </div>

        <MapSelector />
      </div>

      <p className="pt-5 text-start">
        <button className="button button-flat" type="reset">
          بازنشانی
        </button>
        <button className="button">ارسال</button>
      </p>
    </form>
  );
}
