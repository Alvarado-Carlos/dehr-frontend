import React from "react";

function DoctorsForm() {
    return (
        <div className="home">
            <div class="container">
                <div class="row">
                    <div class="column">
                        <h1 class="font-weight-light">Doctor</h1>
                        <p>Here a doctor can update a patients records.</p>
                        <form class="row has-insurance">
                            <label>Has Insurance:</label>
                            <input type="submit" value="Yes" />
                            <input type="submit" value="No" />
                        </form>
                        <form class="row weight">
                            <label>
                                Weight:
                                <input type="text" name="name" />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                        <form class="row height">
                            <label>
                                Height:
                                <input type="text" name="name" />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div class="column">
                        <form class="row Misc Data">
                            <label>
                                Misc Data (IPFS)
                                <input type="text" name="name" />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorsForm;
