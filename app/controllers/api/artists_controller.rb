class Api::ArtistsController < ApplicationController
  before_action :set_artist, only: [:show, :update, :destroy]

  def index
    render json: Artist.all 
  end

  def show
    render json: @artist
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      render json: @artist
    else
      render json: { errors: @artist.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @artist.update(artist_params)
      render json: @artist
    else
      render json: { errors: @artist.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @artist.destroy
    render json: { message: 'Artist deleted' }
  end

  private
    def set_artist
      @artist = Artist.find(params[:id])
    end

    def artist_params
      params.require(:artist).permit(:genre, :desc)
    end

end
