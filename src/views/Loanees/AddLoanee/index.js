
import {Button} from "../../../components/Button"
import Input from "../../../components/Input"
import Label from "../../../components/Label"
import DashBoard from "../../Dashboard"
const AddLoanee = (props) => {
    return (
        <DashBoard>
            <section class="my-auto mt-10 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
           Add Debtor
          </h2>

          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <Label title="Username"></Label>
                <Input type="text" name="username" />
              </div>

              <div>
                <Label title="Email"></Label>
                <Input type="text" name="username" />
              </div>

              <div>
                <Label title="Password"></Label>
                <Input type="text" name="username" />
              </div>

              <div>
                <Label title="Password Confirmation"></Label>
                <Input type="text" name="username" />
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <Button title="Save" />
            </div>
          </form>
        </section>

     
        </DashBoard>
    )
}

export default AddLoanee