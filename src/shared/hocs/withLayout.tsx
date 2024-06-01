import { FC, PropsWithChildren } from "react";
import { Header, Wrapper } from "shared/ui";

// HOC для Layout приложения

const withLayout =
  <T,>(Component: FC<PropsWithChildren<T>>): FC<PropsWithChildren<T>> =>
  (props: PropsWithChildren<T>) =>
    (
      <>
        <Header />
        <Wrapper>
          <Component {...props} />
        </Wrapper>
      </>
    );

export default withLayout;
