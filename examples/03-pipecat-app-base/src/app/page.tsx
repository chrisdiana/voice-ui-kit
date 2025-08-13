"use client";

import {
  ErrorCard,
  FullScreenContainer,
  PipecatAppBase,
  PipecatBaseChildProps,
  SpinLoader,
} from "@pipecat-ai/voice-ui-kit";

import { App } from "./app";

export default function Home() {
  return (
    <FullScreenContainer>
      <PipecatAppBase
        transportType="smallwebrtc"
        connectParams={{
          webrtcUrl: "/api/offer",
        }}
      >
        {({
          client,
          handleConnect,
          handleDisconnect,
          error,
        }: PipecatBaseChildProps) =>
          !client ? (
            <SpinLoader />
          ) : error ? (
            <ErrorCard size="lg" rounded="lg" shadow="short">
              {error}
            </ErrorCard>
          ) : (
            <App
              handleConnect={handleConnect}
              handleDisconnect={handleDisconnect}
              error={error}
            />
          )
        }
      </PipecatAppBase>
    </FullScreenContainer>
  );
}
