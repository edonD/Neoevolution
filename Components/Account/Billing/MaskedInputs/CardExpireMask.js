import MaskedInput from "react-text-mask";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

function CardExpireMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      // ref={(ref) => {
      //   inputRef(ref ? ref.inputElement : null);
      // }}
      mask={[/\d/, /\d/, "/", /\d/, /\d/]}
      pipe={autoCorrectedDatePipe}
      guide
      keepCharPositions
    />
  );
}

const autoCorrectedDatePipe = createAutoCorrectedDatePipe("mm/yy", {
  minYear: 1900,
  maxYear: 2099,
});
export default CardExpireMask;
