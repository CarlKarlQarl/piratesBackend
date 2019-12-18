class PiratesController < ApplicationController
    def index
        pirates = Pirate.all
        render json: pirates
    end

    def show
        pirate = Pirate.find(params[:id])
        render json: pirate
    end 

    def create
        pirate = Pirate.create(
            name: params[:name],
            ship_id: params[:ship_id]
        )

        render json: pirate

    end
end
