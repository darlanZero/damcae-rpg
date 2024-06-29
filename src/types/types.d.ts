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
    content: {
      textContent: string;
      imageContent?: string;
      altName?: string;
    }[];
  }

  declare interface ModalInterface {
    children: React.ReactNode;
    title?: string;
    onClose: () => void;
  }