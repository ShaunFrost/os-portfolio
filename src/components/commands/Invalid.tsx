type InvalidCommandProps = {
  command: string;
};

export const Invalid = ({ command }: InvalidCommandProps) => {
  return (
    <>
      <span>{command}</span>
      <br />
      <span>{`${command} command not recognized. Please enter a valid command.\nType `}</span>
      <span style={{ color: "lightgreen" }}>help</span>
      <span>{` to get a list of commands.\n`}</span>
      <br/>
    </>
  );
};
