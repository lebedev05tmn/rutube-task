import { FC } from "react";
import { RadioTypes } from "shared/config";
import { IQuestionVariant } from "shared/types/interfaces";
import { RatingButton } from "shared/ui";

import styles from "./FormRadio.module.scss";

export const FormRadio: FC<{
  title: string;
  type: string;
  variants?: IQuestionVariant[];
  minScale?: number;
  maxScale?: number;
  id: number;
}> = ({ title, type, variants, minScale, maxScale, id }) => {
  const dataAttr = type === RadioTypes.RADIO && { "data-type": "form" };
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{title}</legend>
      <div className={styles.Container} {...dataAttr}>
        {type === RadioTypes.RADIO &&
          variants &&
          variants.map((variant: IQuestionVariant) => (
            <RatingButton
              key={variant.responseId}
              title={variant.text}
              id={String(variant.responseId)}
              name={"form-radio-" + id}
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
              />
            ))}
      </div>
    </fieldset>
  );
};

export default FormRadio;
