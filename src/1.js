// @flow

type Props = { value: string };
type NullableProps = { value: string | null };

function logStringContainer(props: Props) {
  logNullableStringContainer(props);
}
function logNullableStringContainer(props: NullableProps) {
  if (props.value != null) {
    console.log(props.value);
  }
}
logStringContainer({ value: 'foo' });
