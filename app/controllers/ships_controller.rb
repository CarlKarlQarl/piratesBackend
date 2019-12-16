class ShipsController < ApplicationController
    
    def index
        ships = Ship.all 
        render json: ships, include: [:pirates]
    end

    def show 
        ship = Ship.find(params[:id])
        render json: ship, include: [:pirates]
    end

end
