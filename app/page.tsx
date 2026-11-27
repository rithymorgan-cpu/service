export default function Dashboard() {
  return (
    <>
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to Morgan Service Management.</p>
        </div>

        <button className="primary-button">
          + Add Machine
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Total Machines</p>
          <h2>24</h2>
          <span>All registered machines</span>
        </div>

        <div className="stat-card">
          <p>Under Maintenance</p>
          <h2>3</h2>
          <span>Currently being serviced</span>
        </div>

        <div className="stat-card">
          <p>Service Due</p>
          <h2>5</h2>
          <span>Upcoming maintenance</span>
        </div>

        <div className="stat-card">
          <p>Completed Services</p>
          <h2>18</h2>
          <span>This month</span>
        </div>
      </div>

      <div className="content-card">
        <h2>Recent Service Records</h2>

        <table>
          <thead>
            <tr>
              <th>Machine</th>
              <th>Service Date</th>
              <th>Service Type</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Morgan Cutter 01</td>
              <td>27 Nov 2026</td>
              <td>Regular Maintenance</td>
              <td><span className="status done">Completed</span></td>
            </tr>

            <tr>
              <td>Morgan Cutter 02</td>
              <td>26 Nov 2026</td>
              <td>Blade Replacement</td>
              <td><span className="status pending">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
