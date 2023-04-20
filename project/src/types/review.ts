type Review = {
comment: string;
date: string;
id: number;
rating: number;
user: {
avatarUrl: string;
id: number;
isPro: boolean;
name: string;
};
}

export type ReviewData = {
    hotelId: number;
    comment: string;
    rating: number;
  }

export type {Review};
