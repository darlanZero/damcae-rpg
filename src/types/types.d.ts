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

  declare interface CardRaceInterface {
    header: {
      title: string;
      banner: string;
      altName: string;
    },
    content: {
      description: string;
      powerDescription: string;
      initialLevelPower: string;
      observation?: string;
      bonus?: string[];
      powerUpLevels?: {
        Level: number;
        Description: string;
      }[]
    }
  }

  declare interface ModalInterface {
    children: React.ReactNode;
    title?: string;
    onClose: () => void;
  }