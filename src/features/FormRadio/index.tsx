import { FC, memo } from "react";
import { RadioTypes } from "shared/config";
import { IRadio, IQuestionVariant } from "shared/interfaces/interfaces";
import { RatingButton } from "shared/ui";

import styles from "./FormRadio.module.scss";

export const FormRadio: FC<IRadio> = memo(
  ({ title, type, variants, minScale, maxScale, id, onChange, question }) => {
    const dataAttr = type === RadioTypes.RADIO && { "data-type": "form" };
    return (
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{title + " *"}</legend>
        <div className={styles.Container} {...dataAttr}>
          {type === RadioTypes.RADIO &&
            variants &&
            variants.map((variant: IQuestionVariant) => (
              <RatingButton
                key={"radio-" + variant.responseID}
                title={variant.text}
                id={String(variant.responseID)}
                name={"form-radio-" + id}
                required={true}
                onChange={onChange}
                value={variant.responseID}
                defaultChecked={question?.responseID == variant.responseID}
                {...dataAttr}
              />
            ))}
          {type === RadioTypes.SCORE &&
            maxScale !== undefined &&
            minScale !== undefined &&
            Array(maxScale - minScale + 1)
              .fill("")
              .map((_, index: number) => (
                <RatingButton
                  key={"radio-" + id + index}
                  title={String(index + minScale)}
                  id={"radio-" + id + index}
                  name={"form-radio-" + id}
                  value={minScale + index}
                  required={true}
                  onChange={onChange}
                  defaultChecked={question?.responseID == minScale + index}
                />
              ))}
        </div>
      </fieldset>
    );
  },
  (prev: IRadio, next: IRadio): boolean =>
    prev.question === next.question ||
    prev.type === next.type ||
    prev.variants === next.variants
);

export default FormRadio;
