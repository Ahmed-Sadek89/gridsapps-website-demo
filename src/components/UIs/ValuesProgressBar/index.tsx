//= Styles
import cls from './valuesProgressBar.module.scss';

type Props = {
  width?: string;
  firstValue?: number;
  lastValue?: number;
  noValues?: boolean;
}

function ValuesProgressBar({ width, firstValue = 0, lastValue = 0, noValues }: Props) {
  return (
    <div className={cls.valuesProgressBar}>
      <div className={cls.bar}>
        <span style={{ width: !width ? `${(firstValue / lastValue) * 100}%` : `${width}%` }}></span>
      </div>
      {!noValues ?
        <div className={cls.values}>
          <span>{firstValue}</span>
          <span>{lastValue}</span>
        </div>
        :
        null
      }
    </div>
  )
}

export default ValuesProgressBar;