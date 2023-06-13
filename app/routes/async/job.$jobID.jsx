// import { useParams } from "@remix-run/react";

export const loader = (request)=>  {
  //function displays different statuses based of api response
  const renderSwitch = (param) => {
    switch (param) {
      case "new":
        return "new status";
      case "done":
        return "done status ";
      default:
        return "pending status";
    }
  };
  //will use this useParams to pass the jobId to the api
  //   const params = useParams();
  return (
    //Eventually this param will be from the api call
    <div>{renderSwitch("new")}</div>
  );
}
