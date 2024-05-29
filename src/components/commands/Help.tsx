export const Help = () => {
  return (
    <>
      <span>help</span>
      <br />
      <span>{`Here's a list of commands`}</span>
      <br />
      <table>
        <tbody>
          <tr>
            <td
              style={{
                color: "lightgreen",
                paddingRight: "20px",
                textAlign: "left",
              }}
            >
              help
            </td>
            <td style={{ textAlign: "left" }}>list all available commands</td>
          </tr>
          <tr>
            <td
              style={{
                color: "lightgreen",
                paddingRight: "20px",
                textAlign: "left",
              }}
            >
              whoami
            </td>
            <td style={{ textAlign: "left" }}>info about me</td>
          </tr>
          <tr>
            <td
              style={{
                color: "lightgreen",
                paddingRight: "20px",
                textAlign: "left",
              }}
            >
              whoareyou
            </td>
            <td style={{ textAlign: "left" }}>info about you, maybe?</td>
          </tr>
          <tr>
            <td
              style={{
                color: "lightgreen",
                paddingRight: "20px",
                textAlign: "left",
              }}
            >
              about
            </td>
            <td style={{ textAlign: "left" }}>open about me app to see my experiences and skills</td>
          </tr>
          <tr>
            <td
              style={{
                color: "lightgreen",
                paddingRight: "20px",
                textAlign: "left",
              }}
            >
              projects
            </td>
            <td style={{ textAlign: "left" }}>open projects app to view my projects</td>
          </tr>
          <tr>
            <td
              style={{
                color: "lightgreen",
                paddingRight: "20px",
                textAlign: "left",
              }}
            >
              clear
            </td>
            <td style={{ textAlign: "left" }}>clear the terminal screen</td>
          </tr>
        </tbody>
      </table>
      <br/>
    </>
  );
};
