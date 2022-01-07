json.array! @listings do |listing| 
    json.partial! '/api/listings/listing', listing: listing
end 