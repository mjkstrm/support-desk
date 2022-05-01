import OgranizationList from "../components/organization/OgranizationList"
import OrganizationForm from "../components/organization/OrganizationForm"


function Settings() {
    
  return (
    <div className="container shadow-sm shadow-indigo-500/50 mx-auto px-5 py-8">
        <div className="border-b border-indigo-500/50">
            <h1 className="text-3xl pb-2 text-white">Settings</h1>
        </div>
        <OrganizationForm></OrganizationForm>
        <div className="flex shadow-md py-5 w-full">
            <div className="flex-none">
                <h1 className="text-2xl pb-2 text-white">Organizations</h1>
                    <div>
                        <OgranizationList></OgranizationList>
                    </div>
            </div>
            <div className="flex-1">

            </div>
        </div>
    </div>
  )
}

export default Settings