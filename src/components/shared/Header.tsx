import { h } from "@stencil/core";

export default ({ label, color }: { label: string; color?: string }) => (
	<ion-header>
		<ion-toolbar color={color || "primary"}>
			<ion-buttons slot="start">
				<ion-back-button />
			</ion-buttons>
			<ion-title>{label}</ion-title>
			<ion-buttons slot="end">
				<ion-button fill="clear" href="/" routerDirection="root">
					<ion-icon slot="icon-only" name="home" />
				</ion-button>
			</ion-buttons>
		</ion-toolbar>
	</ion-header>
);
