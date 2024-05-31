import { FC, PropsWithChildren } from "react";
import { Header, Wrapper } from "shared/ui";

// HOC для Layout приложения

const withLayout =
  (Component: FC<PropsWithChildren>): FC<PropsWithChildren> =>
  (props: PropsWithChildren) =>
    (
      <>
        <Header />
        <Wrapper>
          <Component {...props} />
        </Wrapper>
      </>
    );

export default withLayout;
