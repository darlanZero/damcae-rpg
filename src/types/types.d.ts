declare interface ProfileUpdatesInterface {
    displayName: string;
    photoURL?: string;
  }

  declare interface NavBarUserInterface {
    displayName: string;
    photoURL: string;
  }

  declare interface CardHistoryInterface {
    title?: string;
    textContent: string;
    imageContent?: string;
  }

  declare interface ModalInterface {
    children: React.ReactNode;
    title?: string;
    onClose: () => void;
  }