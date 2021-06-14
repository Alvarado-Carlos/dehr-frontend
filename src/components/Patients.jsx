import React from "react";

function Patients() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <h1 class="font-weight-light">Patients</h1>
            <p>
              Here you can look up a patient's electronic health record to be
              displayed. Additionally, here patients can approve/disapprove of
              certain doctors to be able to update their records (without the
              patients' approval, the doctors will be unable to submit any
              changes).
            </p>
            <form class="row patient-lookup">
              <label>
                Patient Address:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Look up" />
            </form>
            <form class="row doctor-approve">
              <label>
                Doctor Address:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Approve" />
              <input type="submit" value="Disapprove" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patients;
