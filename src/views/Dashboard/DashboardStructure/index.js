function DashboardStatisticCard(props) {
    return (
      <div className=" capitalize flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
        <div>
          <span className="text-sm font-semibold text-gray-400">{props.title}</span>
          <h1 className="text-2xl font-bold">{props.value}</h1>
        </div>
        <div>
          {props.icon}
        </div>
      </div>
    );
  }

  export {
      DashboardStatisticCard
  }