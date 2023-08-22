const Banner = ({ data }) => {
  return (
    <div className="banner-container">
      <div className="column-container">
        <div>
          <h6>IP ADDRESS</h6>
          <h3>{data.ip}</h3>
        </div>
        <div>
          <h6>LOCATION</h6>
          <h3>{data.country_name},</h3>
          <h3>{data.state_prov}</h3>
        </div>
        <div>
          <h6>TIMEZONE</h6>
          {data.time_zone && <h3>UTC {data.time_zone.offset}:00</h3>}
        </div>
        <div>
          <h6>ISP</h6>
          <h3>{data.isp}</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
